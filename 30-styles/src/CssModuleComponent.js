import React from 'react'
import styles from './styles/cssModule.module.css'

// CSS Module
// 클래스명 중복 방지
export default function CssModuleComponent() {
    // console.log(styles); // css style 이 객체 형태로 전달됨
    // 새로운 고유번호를 부여함 -> 중복 문제 해결!
  return (
    <div className={styles.container}>
        <div className={[styles.box, styles.red].join(' ')}>1</div>
        {/* 클래스명을 두개 이상 적용 시키기 */}
        {/* 배열의 요소들을 문자열로 합쳐서 클래스명을 한 줄로 만들어야함 -> join() 메서드 활용 */}
        {/* [styles.box, styles.red].join(' ') */}
        <div className={[styles.box, styles.orange].join(' ')}>2</div>
        <div className={`${styles.box} ${styles.yellow}`}>3</div>
        {/* 백틱을 사용한 템플릿 리터럴, 두 클래스를 함꼐 적용 */}
        {/* `${styles.box} ${styles.yellow}` */}
        {/* 이 방법을 많이 쓴다! -> 가장 간단하고 가독성이 좋아서 */}
    </div>
  )
}
