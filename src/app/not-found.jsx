import React from 'react'
import imageNotFound from './../../public/Notfound.gif'
export default function notFound() {
  return (
    <main style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div className="flex flex-col bg-slate-200 dark:bg-slate-800  w-full rounded-lg p-6 my-3">
        <img src={imageNotFound.src} alt="" style={{ userSelect: "none", msUserSelect: "none", MozUserSelect: "none", width: "100%" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: "35px" }}>این صفحه یافت نشد!</span>
        <a
          href='/'
          style={{
            padding: "10px 25px "
            , borderRadius: "8px",
            background: "green",
            border: "none",
            outline: "none",
            fontWeight: "800 ",
            color: "white",
            fontSize: "18px",
            textAlign: "center",
            textDecoration: "none"
          }}>
          بازگشت به خانه
        </a>
      </div>
    </main>

  )
}
