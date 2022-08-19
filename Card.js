import React ,{useState,useEffect} from 'react'

function Card(){ 



  


    const [user,setUser] = useState([]);

    const fetchData =()=>{


        fetch(`https://akabab.github.io/superhero-api/api/all.json`)
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            console.log(data);
            setUser(data)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
  
    return (
      <>


      <h1>Super Hero's</h1>

   
        <div className="clearfix">
        <div className="row">
          {user.map(data => (
            <div className="col-md-4 animated fadeIn">
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.images.sm}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    Name: {data.name} - <br/> Alias: {data.biography.aliases[0]}
                  </h5>
                  <h5 className="card-title">
                    Full Name: {data.biography.fullName}
                  </h5>
                  <h5 className="card-title">
                    Gender: {data.appearance.gender}
                  </h5>
                  <p className="card-text">
                    {data.name +
                      ", " +
                      data.name}
                    <br />
                    <span className="phone">{data.connections.groupAffiliation}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>

      </>
    )
}

export default Card