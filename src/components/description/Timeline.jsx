import PropTypes from 'prop-types';
import ComposeForm from './Composeform';


function Timeline({ tweets }){

    return(
        <ul className='timeline'>
             {tweets.map(({ user, created_on, content }) => (
                  
                  <li className='timeline-item'>
                      <ComposeForm user ={user} createdOn ={created_on}>
                          {content}
                      </ComposeForm>
                  </li>
             ))}
        </ul>
    )
}
Timeline.propTypes = {
    tweets : PropTypes .array,
};

export default Timeline;