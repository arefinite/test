import { useRef } from 'react'
import { useState } from 'react'
import style from './Form.module.css'
const Form = () => {
  const [data, setData] = useState([])
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')
  const [mode, setMode] = useState('Cash')
  const [remark, setRemark] = useState('')
  const inputRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    const newData = { date, amount, mode, remark }
    setData(prevData => [...prevData, newData])
    setDate('')
    setAmount('')
    setMode('Cash')
    setRemark('')
    inputRef.current.focus()
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
              ref={inputRef}
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
              value={remark}
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
        {data.length > 0 && (
          <table>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment Mode</th>
              <th>Remark</th>
            </tr>
            {data.map(d => (
              <tr key={d.date * Math.random()}>
                <td>{d.date}</td>
                <td>{d.amount}</td>
                <td>{d.mode}</td>
                <td>{d.remark}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
    </>
  )
}

export default Form
