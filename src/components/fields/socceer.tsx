import Image from "next/image"

export default function Soccer() {
  return (
    <div className="">
      <div
         className="opacity-80 hover:opacity-100 transition-opacity duration-300"
        style={{
          top: "400.7px",
          left: "-270.6px",
          width: "90.5px",
          height: "165px",
        }}
      >
        <Image
          src='/soccer.svg'
          alt="Large positioned image"
          fill
          className=""
          sizes="(max-width: 1305px) 100vw, 1305px"
        />
      </div>
    </div>
  )
}

