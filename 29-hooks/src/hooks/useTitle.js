import React, {useEffect} from 'react'

// 커스텀 훅
export default function useTitle(custom) {
  useEffect(() => {
    // mount시 실행되는 공간
    const prevTitle = document.title;
    document.title = custom;

    // unmount 시 실행
    return () => {document.title = prevTitle}
  }, [custom]) // custom이 변경될 때마다 문서 제목 업데이트
}

// 페이지의 제목을 동적으로 설정
// 컴포넌트가 언마운트되면 이전 제목으로 복원