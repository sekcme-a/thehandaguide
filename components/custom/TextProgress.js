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
          return(
            <div key={index} className={styles.item_container}>
              {item.img && <Image src={item.img} alt="사진" width={item.width} height={item.height} style={{marginTop:"50px"}} />}
              <div className={styles.text}>{data.list==="true" && `${index+1}. `} {item.text}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MainInfo