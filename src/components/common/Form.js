import React, { forwardRef} from 'react'

const Form = ({ error, value, submit, onChange }, ref) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  }
  return (
    <form onSubmit={submit}>
      <div className='form-group row align-items-center'>
        <div className='col-9 pr-0'>
          <input
            ref={ref}
            type='text'
            className='form-control-plaintext'
            placeholder='Add task'
            value={value}
            onChange={handleChange}
          />
          {error && <small className='form-text text-danger'>{error}</small>}
        </div>
        <div className='col-3 text-end'>
          <button type='submit' className='btn btn-primary'>
            Add Todo
          </button>
        </div>
      </div>
    </form>
  )
}

export default forwardRef(Form)