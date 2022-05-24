import 'tachyons';
import data from '../../data';


export default function Samples() {
    return (
        <div className="samples">

            { 
              data && data.map( data => {
                return (
                    <div key={ data.id }>

                      { data.readable ? (


                          <div key={data} className="lh-copy fl tc p-5" id="sample">

                            <a href={ data.preview }>{ data.title }</a>
                          </div>

                      ) : null }

                    </div>
                );
              })
            }
     </div>
    );
}