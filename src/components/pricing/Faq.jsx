import React, { useRef, useState } from "react"
import Heading from "../common/heading/Heading"

const Faq = ({ faq }) => {
  const [click, setClick] = useState(null)

  const toggle = (index) => {
    if (click === index) {
      return setClick(null)
    }
    setClick(index)
  }

  return (
    <>
      <Heading subtitle='FAQS' title='Frequently Asked Questions' />
      <section className='faq'>
        <div className='container'>
          {faq.map((val, index) => (
            <div className='box' key={index}>
              <button className='accordion' onClick={() => toggle(index)}>
                <h2>{val.title}</h2>
                <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
              </button>
              {click === index ? (
                <div className='text'>
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Faq
