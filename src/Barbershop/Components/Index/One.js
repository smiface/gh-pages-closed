import React from 'react'

export default function One() {
  return (
    <div className="col-12 .df_col one">


      <div className="index-logo">
        <img src={require('../../Styles/Components/Index/indexLogo.png')} className="index-logo" alt='main logo' />
      </div>

      <div className="df_jcsa index-info">

        <div className="col-4 df_col container">
          <h3>Быстро</h3>
          <div className="indexRhomb">
            <div>▲ </div>
            <div>▼</div>
          </div>
          <p>МЫ ДЕЛАЕМ СВОЮ РАБОТУ БЫСТРО! ДВА ЧАСА ПРОЛЕТЯТ НЕЗАМЕТНО И ВЫ — СЧАСТЛИВЫЙ ОБЛАДАТЕЛЬ СТИЛЬНОЙ СТРИЖКИ-МИНУТКИ!</p>
        </div>

        <div className="col-4 df_col  container">
          <h3>Круто</h3>
          <div className="indexRhomb">
            <div>▲ </div>
            <div>▼</div>
          </div>
          <p>ЗАБУДЬТЕ, КАК ВЫ СТРИГЛИСЬ РАНЬШЕ.
          МЫ СДЕЛАЕМ ИЗ ВАС ЗВЕЗДУ ФУТБОЛА ИЛИ КИНО!
          ВО ВСЯКОМ СЛУЧАЕ ВНЕШНЕ.
  </p>
        </div>

        <div className="col-4 df_col  container">
          <h3>Дорого</h3>
          <div className="indexRhomb">
            <div>▲ </div>
            <div>▼</div>
          </div>
          <p>НАШИ МАСТЕРА — ПРОФЕССИОНАЛЫ СВОЕГО ДЕЛА И НЕ МОГУТ СТОИТЬ ДЕШЕВО. К ТОМУ ЖЕ, РАЗВЕ ЦЕНА НЕ ДАЕТ ОПРЕДЕЛЕНЫЙ СТАТУС?</p>
        </div>
      </div>
    </div>

  )
}