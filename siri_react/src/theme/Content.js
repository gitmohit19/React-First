import React from 'react';


const Content = (props) => {

  const {score}=props;
  const {runs,wicket,over}=props.score;
     
  return (
      <>
          <div className="col-8 bg-secondary bg-opacity-50">
              <h3>Content</h3>
              {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width={400}/> */}
            <h4>Runs-{props.score.runs}</h4>
            <h4>Wicket-{props.score.wicket}</h4>
            <h4>Over-{props.score.over}</h4>
          </div>
      </>
      )
}
export default Content;