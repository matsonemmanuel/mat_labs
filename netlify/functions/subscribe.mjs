
export default async (request) => {
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  };

  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed." }),
      { status: 405, headers: { ...headers, Allow: "POST" } }
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
    console.error("Brevo environment variables are missing or invalid.");

    return new Response(
      JSON.stringify({ error: "Subscription service is not configured yet." }),
      { status: 500, headers }
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid request." }),
      { status: 400, headers }
    );
  }

  const email =
    typeof body?.email === "string" ? body.email.trim() : "";

  if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return new Response(
      JSON.stringify({ error: "Please enter a valid email address." }),
      { status: 400, headers }
    );
  }

  try {
    const brevoResponse = await fetch(
      "https://api.brevo.com/v3/contacts",
      {
        method: "POST",
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          listIds: [listId],
          updateEnabled: true,
        }),
      }
    );

    if (brevoResponse.ok) {
      return new Response(
        JSON.stringify({
          message: "You're subscribed to Mat Labs Insights!",
        }),
        { status: 200, headers }
      );
    }

    const brevoError = await brevoResponse.json().catch(() => ({}));

    if (
      brevoResponse.status === 400 &&
      /already exists|duplicate/i.test(
        `${brevoError.message || ""} ${brevoError.code || ""}`
      )
    ) {
      return new Response(
        JSON.stringify({
          message: "This email is already subscribed.",
        }),
        { status: 200, headers }
      );
    }

    console.error("Brevo subscription request failed:", {
      status: brevoResponse.status,
      code: brevoError.code,
    });

    return new Response(
      JSON.stringify({
        error: "We couldn't complete your subscription. Please try again.",
      }),
      { status: 502, headers }
    );
  } catch {
    return new Response(
      JSON.stringify({
        error: "Unable to reach the subscription service. Please try again.",
      }),
      { status: 502, headers }
    );
  }
};
