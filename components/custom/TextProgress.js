import styles from "./styles/index.module.css"
import Image from "next/image"

const MainInfo = ({data}) => {
  if(data)
  return(
    <div className={styles.text_progress_container}>
      {console.log(data)}
      <div className={styles.title}>{data.title}</div>
      {(data.role==="high"||data.role==="super") &&
        <div className={styles.subtitle}>해당 기능은 {data.role} 이상의 권한이 있어야합니다.</div>
      }
      <div>
        {data.step.map((item, index) => {
          if(item.url)
            return(
              <div key={index} className={styles.item_container}>
                <div className={item.fontWeight==="bold" ? styles.bold_text : styles.text}>{data.list==="true" && `${index+1}. `}{item.text}</div>
                <div className={styles.url_container}>
                  <a href={item.url}>여기</a><p>를 눌러 해당 페이지로 이동</p>
                </div>
              </div>
            )
          else 
            return(
              <div key={index} className={styles.item_container}>
                {item.img && <Image src={item.img} alt={`${data.title}_${index}`} width={item.width} height={item.height} style={{marginTop:"50px", marginBottom:"15px", objectFit:"contain"}} loading="lazy" />}
                <div className={item.fontWeight==="bold" ? styles.bold_text : styles.text}>{data.list==="true" && `${index+1}. `}{item.text}</div>
                
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default MainInfo