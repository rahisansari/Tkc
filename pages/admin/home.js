import Image from 'next/image';
const Home = () => {
    return (
<>




  <header role="banner">
    <h1>Admin Panel</h1>
    <ul className="utilities">
      <br />
      <li className="users">
        <a href="#">My Account</a>
      </li>
      <li className="logout warn">
        <a href="">Log Out</a>
      </li>
    </ul>
  </header>








  <nav role="navigation">


    <ul className="main">
      <li className="home">
        <a href="#">Home Page</a>
      </li>



      <li className="edit">
        <a href="#">Campaign Page</a>
      </li>



      <li className="write">
        <a href="#">Event Page</a>
      </li>


      <li className="comments">
        <a href="#">Donate</a>
      </li>


      <li className="users">
        <a href="#">Get Involved</a>
      </li>


      <li className="contact_us">
        <a href="#">Contact Us</a>
      </li>

    </ul>



  </nav>




    <main role="main">
    <section className="panel important">
    <h2>Mission & Vision</h2>




    <div className="container">
    <label class="form-label" for="typeText">Page Header Text</label>
    <div className="row">

    <div className="col-md-8">
    <div className="form-outline">
    <textarea class="form-control " placeholder="Type here" id="floatingTextarea"></textarea>
    </div>
    </div>


    <div className="col-md-4">
    <button type="button" className="btn btn-outline-primary align-self-center">Update Site</button>
    </div>


    
    </div>
    </div>

<br/><br/>

    <div className="container">
    <div className="row">
    <div className="col-md-3">
    <label class="form-label" for="typeText">Left Media</label>
    </div>
    <div className="col-md-3">
    <Image
                                                        src="/no-img.jpg"
                                                        width={100}
                                                        height={100}
                                                        alt="Picture of the author"
                                                    />
    </div>
    <div className="col-md-3">
    <input class="form-control" type="file"/>
    </div>

    <div className="col-md-3">
    <button type="button" className="btn btn-outline-primary">Update Site</button>
    </div>
    </div>
    </div>


    <br/>

<div className="container">
<div className="row">
<div className="col-md-3">
<label class="form-label" for="typeText">Middle Media</label>
</div>
<div className="col-md-3">
<Image
                                                         src="/no-img.jpg"
                                                        width={100}
                                                        height={100}
                                                        alt="Picture of the author"
                                                    />
</div>
<div className="col-md-3">
<input class="form-control" type="file"/>
</div>

<div className="col-md-3">
<button type="button" className="btn btn-outline-primary">Update Site</button>
</div>
</div>
</div>



<br/> 

    <div className="container">
    <div className="row">
    <div className="col-md-3">
    <label class="form-label" for="typeText">Right Media</label>
    </div>
    <div className="col-md-3">
    <Image
                                                        src="/no-img.jpg"
                                                        width={100}
                                                        height={100}
                                                        alt="Picture of the author"
                                                    />
    </div>
    <div className="col-md-3">
    <input class="form-control" type="file"/>
    </div>

    <div className="col-md-3">
    <button type="button" className="btn btn-outline-primary">Update Site</button>
    </div>
    </div>
    </div>


   <br/> <br/>
   <div className="container">
    <label class="form-label" for="typeText">Vision Text</label>
    <div className="row">

    <div className="col-md-8">
    <div className="form-outline">
    <textarea class="form-control " placeholder="Type here" id="floatingTextarea"></textarea>
    </div>
    </div>


    <div className="col-md-4">
    <button type="button" className="btn btn-outline-primary align-self-center">Update Site</button>
    </div>
    </div>
    </div>



    






    </section>
  </main>
</>





    );
}

export default Home;