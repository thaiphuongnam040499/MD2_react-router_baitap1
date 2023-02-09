import React from 'react'

export default function Contact() {
  return (
    <div>
        <h1 className="my-3">Contact Us</h1>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Name
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Email
            </label>
            <input type="password" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Website
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              Message
            </label>
            <br />
            <textarea name="" id="" cols={60} rows={5} defaultValue={""} />
          </div>
          <div className="col-12 my-4">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </form>
    </div>
  )
}
