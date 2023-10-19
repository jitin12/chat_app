import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className=" d-flex min-vw-100 min-vh-100 justify-content-center bg-dark">
      <div className='d-flex flex-column mt-5 w-50'>
        <div className='card h-50'>
          <div className='card-body'>
          <p className='card-text float-start border-dark-2  rounded p-1 bg-dark text-light'>tedsadsdsxt</p><br/><br/>
          <p className='card-text float-end border-dark-2  rounded p-1 bg-dark text-light'>tadsdsxt</p>
          </div>
        </div><br/><br/>
        <div className="d-flex flex-row justify-content-between">
          <input type="email" className="form-control" placeholder='Enter Message' />
            <button type='button' className='btn btn-primary ms-2'>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
