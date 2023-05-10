import { FormControl, MenuItem, InputLabel, Select, TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useSelector, useDispatch } from 'react-redux'
import { setTower, setFloor, setConf, setDay, setTime, setComment, createBooking, cleanForm } from './store/bookingSlice'
import { floors, confs, times } from './options/options'

function App() {


  const dispatch = useDispatch()
  const tower = useSelector(state => state.booking_state.booking.tower)
  const floor = useSelector(state => state.booking_state.booking.floor)
  const conf = useSelector(state => state.booking_state.booking.conf)
  const day = useSelector(state => state.booking_state.booking.day)
  const time = useSelector(state => state.booking_state.booking.time)
  const comment = useSelector(state => state.booking_state.booking.comment)
  const isSend = useSelector(state => state.booking_state.isSend)
  const isError = useSelector(state => state.booking_state.isError)



  return (
    <div className="App">
      <div className="container">
        <div className="form__item">
          {
            !tower && isError ? <div className='form__item__label'>Выберите башню</div> : null
          }
          <FormControl className='form__item__control'>
            <InputLabel id="tower-label">Башня</InputLabel>
            <Select className='form__item__select' name="tower" id="tower" label='Башня' labelId='tower-label' value={tower} onChange={e => dispatch(setTower(e.target.value))}>
              <MenuItem value="A">А</MenuItem>
              <MenuItem value="B">Б</MenuItem>
            </Select>
          </FormControl>

        </div>

        <div className="form__item">
          {
            !floor && isError ? <div className='form__item__label'>Выберите этаж</div> : null
          }
          <FormControl className='form__item__control'>
            <InputLabel id="floor-label">Этаж</InputLabel>
            <Select className='form__item__select' name="floor" id="floor" value={floor} label='Этаж' labelId='floor-label' onChange={e => dispatch(setFloor(e.target.value))}>
              {
                floors.map(floor => (
                  <MenuItem value={floor}>{floor}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>

        <div className="form__item">
          {
            !conf && isError ? <div className='form__item__label'>Выберите переговорную</div> : null
          }
          <FormControl className='form__item__control'>
            <InputLabel id="conf-label">Переговорная</InputLabel>
            <Select name="confs" id="confs" label='Переговорная' labelId='conf-label' value={conf} onChange={e => dispatch(setConf(e.target.value))}>
              {
                confs.map(c => (
                  <MenuItem value={c}>{c}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>
        <div className="form__item">
          {
            !day && isError ? <div className='form__item__label'>Выберите день</div> : null
          }
          <FormControl className='form__item__control'>
            <LocalizationProvider dateAdapter={AdapterDayjs} value={day}>
              <DatePicker id='datepicker' onChange={e => dispatch(setDay(`${('0' + e.$D).slice(-2)}.${('0' + (+e.$M + 1)).slice(-2)}.${e.$y}`))} />
            </LocalizationProvider>
          </FormControl>

        </div>
        <div className="form__item">
          {
            !time && isError ? <div className='form__item__label'>Выберите время</div> : null
          }
          <FormControl className='form__item__control'>
            <InputLabel id='time-label'>Время</InputLabel>
            <Select name="time" id="time" label='Время' labelId='time-label' value={time} onChange={e => dispatch(setTime(e.target.value))}>
              {
                times.map(t => (
                  <MenuItem value={t}>{t}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>
        <div className="form__item">
          {
            !comment && isError ? <div className='form__item__label'>Добавьте комментарий</div> : null
          }
          <FormControl className='form__item__control'>
            <TextField
              placeholder="Комментарий..."
              multiline
              rows={2}
              maxRows={6}
              value={comment}
              onChange={e => dispatch(setComment(e.target.value))}
            />
          </FormControl>

        </div>
        <div className="form__item">
          <button className='form__item__btn form__item__btn--accent' onClick={() => dispatch(createBooking())}>Отправить</button>
          <button className='form__item__btn' onClick={() => dispatch(cleanForm())}>Очистить</button>
        </div>
      </div>
    </div >
  );
}

export default App;
