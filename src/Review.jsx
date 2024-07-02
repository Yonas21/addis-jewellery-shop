
function Review() {
  return (
    <>
    <div className="review_box">
    <h4>Add a Review</h4>
    <p>Your Rating:</p>
    {/* <star-rating value="5" checkedcolor="yellow" uncheckedcolor="black" size="18px"    readonly="false" (rate)="onRate($event)"></star-rating> */}
    <form className="row contact_form"  method="post" >
        <div className="col-md-12">
            <div className="form-group">
                <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
            </div>
        </div>
        <div className="col-md-12">
            <div className="form-group">
                <input type="text" className="form-control" id="number" name="phone" placeholder="Phone Number" />
            </div>
        </div>
        <div className="col-md-12">
            <div className="form-group">
                      <textarea className="form-control" name="message"  id="message" rows="1"
                                placeholder="Review" ></textarea>
            </div>
        </div>
        <div className="col-md-12 text-right">
            <button type="submit" value="submit"
                    className="btn submit_btn"
            >Submit Now</button>
        </div>

    </form>
</div>

    </>
  )
}

export default Review