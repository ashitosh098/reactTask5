

export default function Card(props) {

    let displayValue =()=>{
        props.handleCard(props.data.value);
    }
  return (
    <>
      <div className="col-xl-3 col-md-6 mb-4" onClick={displayValue}>
        <div className={`card shadow h-100 py-2 border-left-${props.data.color}`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className={`text-xs font-weight-bold text-uppercase mb-1 text-${props.data.color}`}>
                  {props.data.plan}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {props.data.currency}{props.data.value}
                </div>
              </div>
              <div className="col-auto">
                {props.data.icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
