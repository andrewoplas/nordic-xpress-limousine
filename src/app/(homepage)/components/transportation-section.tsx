import React from "react";

const transportationTypes = [
  {
    heading: "Lufthavnstransfer",
    description:
      "Ankom til lufthavnen til tiden og uden stress med vores pålidelige lufthavnstransportservice.",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.8604 19.25C39.0112 19.25 40.7221 19.515 41.993 20.0449C43.264 20.5749 43.8995 21.2266 43.8995 22C43.8995 22.7734 43.264 23.4251 41.993 23.9551C40.7221 24.485 39.0112 24.75 36.8604 24.75H35.1006L28.7458 24.5781C28.7132 24.5781 28.6725 24.5781 28.6236 24.5781C28.5747 24.5781 28.5503 24.6068 28.5503 24.6641L19.0671 37.2109C18.9367 37.4115 18.7493 37.5618 18.5049 37.6621C18.2605 37.7624 17.9916 37.8125 17.6983 37.8125H15.4497C15.1564 37.8125 14.9609 37.7122 14.8632 37.5117C14.7654 37.3112 14.7654 37.0964 14.8632 36.8672L19.7514 24.5781C19.7514 24.5495 19.7351 24.5137 19.7025 24.4707C19.67 24.4277 19.6211 24.4062 19.5559 24.4062L7.72628 24.1484C7.62852 24.1484 7.51446 24.1699 7.3841 24.2129C7.25375 24.2559 7.13969 24.3203 7.04192 24.4062L3.32684 28.3594C3.19649 28.5312 3.03354 28.6602 2.83801 28.7461C2.64248 28.832 2.41436 28.875 2.15366 28.875H0.491645C0.361291 28.875 0.255379 28.8249 0.173908 28.7246C0.0924367 28.6243 0.0679953 28.5026 0.100584 28.3594L2.05589 22.5156C2.15366 22.3437 2.20254 22.1719 2.20254 22C2.20254 21.8281 2.15366 21.6562 2.05589 21.4844L0.100584 15.5547C0.0679953 15.4401 0.0842896 15.3398 0.149466 15.2539C0.214643 15.168 0.328703 15.125 0.491645 15.125H2.15366C2.38178 15.125 2.5936 15.168 2.78913 15.2539C2.98466 15.3398 3.1639 15.4687 3.32684 15.6406L6.94416 19.5078C7.04192 19.5937 7.13969 19.6582 7.23745 19.7012C7.33522 19.7441 7.46557 19.7656 7.62852 19.7656L19.5559 19.5937C19.5885 19.5937 19.6292 19.5794 19.6781 19.5508C19.727 19.5221 19.7514 19.4792 19.7514 19.4219L14.8632 7.13281C14.7654 6.93229 14.7654 6.72461 14.8632 6.50976C14.9609 6.29492 15.1564 6.1875 15.4497 6.1875H17.6983C17.9265 6.1875 18.1709 6.23047 18.4316 6.3164C18.6923 6.40234 18.9041 6.55989 19.0671 6.78906L28.5503 19.3359C28.5503 19.3646 28.5666 19.3861 28.5992 19.4004C28.6318 19.4147 28.6807 19.4219 28.7458 19.4219L35.1006 19.25H36.8604Z"
          fill="#E96207"
        />
      </svg>
    ),
  },
  {
    heading: "Krydstogt",
    description:
      "Start din krydstogtferie på den rigtige fod med vores problemfri krydstogtshavns-transportservice.",
    icon: (
      <svg
        width="50"
        height="44"
        viewBox="0 0 50 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_66_133)">
          <path
            d="M16.5 2.75C16.5 1.22891 17.7289 0 19.25 0H30.25C31.7711 0 33 1.22891 33 2.75V5.5H37.125C39.4023 5.5 41.25 7.34766 41.25 9.625V20.625L45.0656 21.8969C47.0508 22.5586 47.6008 25.1195 46.0539 26.5289L37.3742 34.4867C35.982 35.2945 34.3922 35.7844 33 35.7844C31.3156 35.7844 29.4938 35.1227 27.9125 34.0398C26.0133 32.7078 23.4781 32.7078 21.5789 34.0398C20.1094 35.0539 18.3133 35.7844 16.4914 35.7844C15.0992 35.7844 13.5094 35.2945 12.1172 34.4867L3.4375 26.5289C1.89063 25.1109 2.44063 22.5586 4.42578 21.8969L8.25 20.625V9.625C8.25 7.34766 10.0977 5.5 12.375 5.5H16.5V2.75ZM13.75 18.7945L23.0141 15.7094C24.1398 15.3313 25.3602 15.3313 26.4945 15.7094L35.75 18.7945V11H13.75V18.7945ZM26.3398 36.257C28.2734 37.5891 30.6367 38.5 33 38.5C35.3117 38.5 37.7609 37.5719 39.6516 36.257C40.6742 35.5266 42.0664 35.5867 43.0203 36.4031C44.2578 37.4258 45.8133 38.2078 47.3688 38.5687C48.8469 38.9125 49.7664 40.3906 49.4227 41.8688C49.0789 43.3469 47.6008 44.2664 46.1227 43.9227C44.0172 43.4328 42.2641 42.5047 41.1211 41.7742C38.6289 43.1148 35.8359 44 33 44C30.2586 44 27.7922 43.1492 26.0906 42.3758C25.5922 42.1437 25.1367 41.9203 24.75 41.7141C24.3633 41.9203 23.9164 42.1523 23.4094 42.3758C21.7078 43.1492 19.2414 44 16.5 44C13.6641 44 10.8711 43.1148 8.37891 41.7828C7.22735 42.5047 5.48282 43.4414 3.37735 43.9313C1.89922 44.275 0.421097 43.3555 0.0773473 41.8773C-0.266403 40.3992 0.653128 38.9211 2.13125 38.5773C3.68672 38.2164 5.24219 37.4344 6.47969 36.4117C7.4336 35.6039 8.82578 35.5438 9.84844 36.2656C11.7477 37.5719 14.1883 38.5 16.5 38.5C18.8633 38.5 21.2266 37.5891 23.1602 36.257C24.1141 35.5781 25.3859 35.5781 26.3398 36.257Z"
            fill="#F56504"
          />
        </g>
        <defs>
          <clipPath id="clip0_66_133">
            <rect width="49.5" height="44" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    heading: "Forretningsrejser",
    description:
      "Gør et godt første indtryk med vores professionelle og pålidelige transporttjenester.",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.125 4.8125V8.25H28.875V4.8125C28.875 4.43437 28.5656 4.125 28.1875 4.125H15.8125C15.4344 4.125 15.125 4.43437 15.125 4.8125ZM11 8.25V4.8125C11 2.15703 13.157 0 15.8125 0H28.1875C30.843 0 33 2.15703 33 4.8125V8.25V11V41.25H11V11V8.25ZM5.5 8.25H8.25V41.25H5.5C2.46641 41.25 0 38.7836 0 35.75V13.75C0 10.7164 2.46641 8.25 5.5 8.25ZM38.5 41.25H35.75V8.25H38.5C41.5336 8.25 44 10.7164 44 13.75V35.75C44 38.7836 41.5336 41.25 38.5 41.25Z"
          fill="#F56504"
        />
      </svg>
    ),
  },
  {
    heading: "Fritidsrejser",
    description:
      "Nyd en stressfri og mindeværdig fritidsrejseoplevelse med vores komfortable og stilfulde transporttjenester.",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_66_149)">
          <path
            d="M16.5 0C14.9789 0 13.75 1.22891 13.75 2.75V5.5C13.75 5.50859 13.75 5.50859 13.75 5.51719C10.4328 5.70625 7.53672 7.86328 6.42813 11.0258L3.40312 19.6625C1.40937 20.4875 0 22.4555 0 24.75V37.125V41.25C0 42.7711 1.22891 44 2.75 44H5.5C7.02109 44 8.25 42.7711 8.25 41.25V37.125H35.75V41.25C35.75 42.7711 36.9789 44 38.5 44H41.25C42.7711 44 44 42.7711 44 41.25V37.125V24.75C44 22.4555 42.5906 20.4875 40.5969 19.6625L37.5719 11.0258C36.4633 7.86328 33.5672 5.69766 30.25 5.51719C30.25 5.50859 30.25 5.50859 30.25 5.5V2.75C30.25 1.22891 29.0211 0 27.5 0H16.5ZM14.2141 11H29.7859C30.9547 11 31.9945 11.7391 32.3812 12.8391L34.6242 19.25H9.37578L11.6187 12.8391C12.0055 11.7391 13.0453 11 14.2141 11ZM8.25 24.75C8.97935 24.75 9.67882 25.0397 10.1945 25.5555C10.7103 26.0712 11 26.7707 11 27.5C11 28.2293 10.7103 28.9288 10.1945 29.4445C9.67882 29.9603 8.97935 30.25 8.25 30.25C7.52065 30.25 6.82118 29.9603 6.30546 29.4445C5.78973 28.9288 5.5 28.2293 5.5 27.5C5.5 26.7707 5.78973 26.0712 6.30546 25.5555C6.82118 25.0397 7.52065 24.75 8.25 24.75ZM33 27.5C33 26.7707 33.2897 26.0712 33.8055 25.5555C34.3212 25.0397 35.0207 24.75 35.75 24.75C36.4793 24.75 37.1788 25.0397 37.6945 25.5555C38.2103 26.0712 38.5 26.7707 38.5 27.5C38.5 28.2293 38.2103 28.9288 37.6945 29.4445C37.1788 29.9603 36.4793 30.25 35.75 30.25C35.0207 30.25 34.3212 29.9603 33.8055 29.4445C33.2897 28.9288 33 28.2293 33 27.5Z"
            fill="#F56504"
          />
        </g>
        <defs>
          <clipPath id="clip0_66_149">
            <rect width="44" height="44" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

export const TransportationSection = () => (
  <section className="px-default mx-auto flex max-w-section flex-col gap-14 py-16 md:py-20 sm:gap-16 lg:gap-20">
    <h2 className="text-h2 text-center font-semibold text-app-orange">
      Effektive og pålidelige transportløsninger til din værdifulde tid
    </h2>

    <div className="-mx-6 grid grid-cols-1 gap-4 divide-dashed divide-[#E0E0E0] sm:grid-cols-2 lg:-mx-8 lg:grid-cols-4 lg:gap-0 lg:divide-x-[1px]">
      {transportationTypes.map((type) => (
        <div
          className="flex flex-col items-center px-6 py-4 sm:items-start lg:px-8"
          key={type.heading}
        >
          {type.icon}
          <h3 className="text-h3 mt-4 text-center text-app-orange sm:text-left">
            {type.heading}
          </h3>
          <p className="mt-4 text-center text-[15px] leading-5 tracking-[0.1em] text-white sm:text-left">
            {type.description}
          </p>
        </div>
      ))}
    </div>

    <div className="flex flex-col items-center justify-center gap-8">
      <h3 className="text-h3 text-center font-semibold text-white">
        Få mere information om vores øvrige tilgængelige services
      </h3>

      <button aria-label="book now" className="shadow-[0px 4px 8px 0px rgba(0, 0, 0, 0.15)] rounded-full bg-app-orange px-6 md:px-7 py-2 md:py-3 text-sm font-semibold leading-7 text-white transition-all hover:saturate-150">
        LÆS MERE
      </button>
    </div>
  </section>
);
