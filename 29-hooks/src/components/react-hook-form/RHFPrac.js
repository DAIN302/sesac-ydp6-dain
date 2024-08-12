import React from 'react'
import { useForm } from 'react-hook-form'


export default function RHFPrac() {
    const {register, handleSubmit, formState : {errors}, watch} = useForm()

    const onValid = (data) => {
        console.log(data);
    }

    const onInValid = (err) => {
        console.log(err);
    }

  return (
    <div style={{textAlign : 'left'}}>
        <form onSubmit={handleSubmit(onValid, onInValid)}>
            <input type='text' placeholder='이름'
            {...register('username', {
                required : '이름은 필수항목입니다.'
            })}
            />
            {errors.username?.message}
            <br />
            <input type='number' placeholder='나이'
            {...register('userage', {
                validate : {
                    overZero : v=> v > 0 ? true : '0이상의 숫자만 입력 가능합니다'
                }
            })}
            />
            {errors.userage?.message}
            <br />
            <button>제출</button>
        </form>
    </div>
  )
}
