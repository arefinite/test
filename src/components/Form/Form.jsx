import { useState } from 'react'
import style from './Form.module.css'
const Form = () => {
  const [data, setData] = useState([])
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')
  const [mode, setMode] = useState('Cash')
  const [remark, setRemark] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const newData = { date, amount, mode, remark }
    setData(prevData => [...prevData, newData])
    console.log(data)
  }

  return (
    <>
      <div className={style.container}>
        <h5>Receipt Details</h5>
        <form className={style.form} onSubmit={handleSubmit}>
          <label htmlFor='date'>
            <span>
              Date<span className={style.req}>*</span>:{' '}
            </span>
            <input
              type='date'
              value={date}
              placeholder='Enter Date'
              onChange={e => setDate(e.target.value)}
              required
            />
          </label>

          <label htmlFor='amount'>
            <span>
              Amount<span className={style.req}>*</span>:{' '}
            </span>
            <input
              type='number'
              value={amount}
              placeholder='Enter Amount (in INR)'
              onChange={e => setAmount(e.target.value)}
              required
            />
          </label>

          <label htmlFor='payment-mode'>
            <span>
              Payment Mode<span className={style.req}>*</span>:{' '}
            </span>
            <select value={mode} onChange={e => setMode(e.target.value)}>
              <option value='Cash'>Cash</option>
              <option value='Card'>Card</option>
            </select>
          </label>

          <label htmlFor='remark'>
            <span>Remark: </span>
            <input
              type='text'
              remark={remark}
              placeholder='Enter Remark'
              onChange={e => setRemark(e.target.value)}
            />
          </label>

          <div className={style.button}>
            <button className={style.cancel}>CANCEL</button>
            <button className={style.submit}>SUBMIT</button>
          </div>
        </form>
      </div>

      <div>
        {data.length > 0 &&
          data.map(d => {
            return (
              <div
                className={style.list}
                key={d.date + d.amount + Math.random() * 1000}
              >
                <p>Date: {d.date}</p>
                <p>Amount: {d.amount}</p>
                <p>Mode: {d.mode}</p>
                <p>Remarks: {d.remark}</p>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Form
