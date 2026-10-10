import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps'

const geoUrl =
  'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson'

function AfricaNetwork() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        bottom-0
        right-[-110px]

        h-[300px]
        w-[390px]

        opacity-50

        sm:right-[-80px]
        sm:h-[350px]
        sm:w-[460px]

        md:right-[-50px]
        md:h-[420px]
        md:w-[520px]

        lg:right-[-40px]
        lg:h-[520px]
        lg:w-[650px]

        overflow-hidden
      "
      aria-hidden="true"
    >

      {/* ==============================================
          SOFT GOLD GLOW
      ============================================== */}

      <div
        className="
          absolute
          right-[8%]
          top-[15%]
          h-[180px]
          w-[180px]
          rounded-full
          bg-mat-gold/[0.045]
          blur-3xl

          sm:h-[220px]
          sm:w-[220px]

          lg:h-[360px]
          lg:w-[360px]
        "
      />

      {/* ==============================================
          BACKGROUND ORBIT LINES
      ============================================== */}

      <div
        className="
          absolute
          right-[-20px]
          top-[5%]
          h-[280px]
          w-[360px]
          rotate-[-9deg]
          rounded-[50%]
          border
          border-mat-gold/[0.06]

          sm:h-[330px]
          sm:w-[430px]

          lg:right-[-40px]
          lg:top-[-20px]
          lg:h-[470px]
          lg:w-[620px]
          lg:border-mat-gold/[0.07]
        "
      />

      <div
        className="
          absolute
          right-[0]
          top-[18%]
          h-[240px]
          w-[320px]
          rotate-[12deg]
          rounded-[50%]
          border
          border-mat-gold/[0.045]

          sm:h-[280px]
          sm:w-[380px]

          lg:top-20
          lg:h-[390px]
          lg:w-[530px]
          lg:border-mat-gold/[0.05]
        "
      />

      <div
        className="
          absolute
          right-[12%]
          top-[25%]
          h-[190px]
          w-[280px]
          rotate-[-20deg]
          rounded-[50%]
          border
          border-mat-gold/[0.035]

          sm:h-[220px]
          sm:w-[330px]

          lg:right-20
          lg:top-28
          lg:h-[300px]
          lg:w-[430px]
          lg:border-mat-gold/[0.04]
        "
      />

      {/* ==============================================
          REAL AFRICA MAP
      ============================================== */}

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [20, 3],
          scale: 390,
        }}
        className="
          absolute
          right-[-20px]
          top-[5px]
          h-[300px]
          w-[390px]

          sm:right-[-10px]
          sm:h-[350px]
          sm:w-[460px]

          md:h-[420px]
          md:w-[520px]

          lg:right-0
          lg:top-[-15px]
          lg:h-[500px]
          lg:w-[570px]
        "
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter(
                (geo) =>
                  geo.properties.CONTINENT === 'Africa',
              )
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#F4B942"
                  fillOpacity={0.055}
                  stroke="#F4B942"
                  strokeOpacity={0.30}
                  strokeWidth={0.45}
                  style={{
                    default: {
                      outline: 'none',
                    },
                    hover: {
                      outline: 'none',
                      fill: '#F4B942',
                      fillOpacity: 0.08,
                    },
                    pressed: {
                      outline: 'none',
                    },
                  }}
                />
              ))
          }
        </Geographies>
      </ComposableMap>

      {/* ==============================================
          TECHNOLOGY NETWORK CONNECTIONS
      ============================================== */}

      <svg
        viewBox="0 0 650 520"
        className="
          absolute
          inset-0
          h-full
          w-full
        "
        fill="none"
      >

        <g
          stroke="#F4B942"
          strokeWidth="1"
          strokeOpacity="0.27"
        >
          <path d="M240 135 L315 180 L380 145" />
          <path d="M315 180 L335 245 L280 290" />
          <path d="M335 245 L400 285 L365 350" />
          <path d="M280 290 L245 350 L300 405" />
          <path d="M365 350 L325 405 L310 455" />
          <path d="M245 350 L195 315" />
          <path d="M400 285 L455 230" />
          <path d="M300 405 L365 385" />
        </g>

        <g
          stroke="#F4B942"
          strokeWidth="0.8"
          strokeOpacity="0.13"
        >
          <path d="M240 135 L175 95" />
          <path d="M380 145 L470 125" />
          <path d="M455 230 L535 260" />
          <path d="M400 285 L520 330" />
          <path d="M365 385 L450 440" />
          <path d="M195 315 L110 350" />
        </g>

        <g fill="#F4B942">
          <circle cx="240" cy="135" r="3" />
          <circle cx="315" cy="180" r="4" />
          <circle cx="380" cy="145" r="3" />
          <circle cx="335" cy="245" r="3.5" />
          <circle cx="280" cy="290" r="3" />
          <circle cx="400" cy="285" r="3.5" />
          <circle cx="365" cy="350" r="3" />
          <circle cx="245" cy="350" r="3" />
          <circle cx="300" cy="405" r="3" />
          <circle cx="325" cy="405" r="3" />
          <circle cx="310" cy="455" r="3" />
          <circle cx="195" cy="315" r="2.5" />
          <circle cx="455" cy="230" r="2.5" />
          <circle cx="365" cy="385" r="2.5" />
        </g>

        <g
          fill="#F4B942"
          fillOpacity="0.45"
        >
          <circle cx="175" cy="95" r="2" />
          <circle cx="470" cy="125" r="2" />
          <circle cx="535" cy="260" r="2" />
          <circle cx="520" cy="330" r="2" />
          <circle cx="450" cy="440" r="2" />
          <circle cx="110" cy="350" r="2" />
        </g>

      </svg>

      {/* ==============================================
          EXTRA GLOWING NODES
      ============================================== */}

      <span
        className="
          absolute
          right-[25%]
          top-[18%]
          h-1
          w-1
          rounded-full
          bg-mat-gold
          shadow-[0_0_10px_rgba(244,185,66,0.7)]
        "
      />

      <span
        className="
          absolute
          right-[10%]
          top-[38%]
          h-1.5
          w-1.5
          rounded-full
          bg-mat-gold/60
          shadow-[0_0_10px_rgba(244,185,66,0.5)]
        "
      />

      <span
        className="
          absolute
          right-[32%]
          bottom-[18%]
          h-1
          w-1
          rounded-full
          bg-mat-gold/50
        "
      />

    </div>
  )
}

export default AfricaNetwork