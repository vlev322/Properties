import React from 'react';

import styles from './properties.sass';

import Title from './title/title';
import Activity from './activity/activity';

const Properties = props => {
    const {} = props;
    return (
        <div className={styles.properties}>
							<Title title='Activity'/>				
						<div className={styles.activity}>
							<Activity
								time='17:25:15 17:12:2018'
								details='Laborum proident amet amet do adipisicing sint aliqua.Anim reprehenderit aute laboris incididunt minim incididunt deserunt ut Lorem qui eiusmod.'
								section='Campaigns'
							/>
							<Activity
								time='17:25:15 17:12:2018'
								details='Lorem itsdf sadf sadf asdf asdf asdf asfd asdf asfd'
								section='Campaigns'
							/>
							<Activity
								time='17:25:15 17:12:2018'
								details='Lorem itsdf sadf sadf asdf asdf asdf asfd asdf asfd'
								section='Campaigns'
							/>
							<Activity
								time='17:25:15 17:12:2018'
								details='Lorem itsdf sadf sadf asdf asdf asdf asfd asdf asfd'
								section='Campaigns'
							/>
							<Activity
								time='17:25:15 17:12:2018'
								details='LorEu Lorem esse dolore in sint adipisicing id.Sunt in id veniam ea quis dolore nisi incididunt.'
								section='Campaigns'
							/>
							<Activity
								time='17:25:15 17:12:2018'
								details='LorEu Lorem esse dolore in sint adipisicing id.Sunt in id veniam ea quis dolore nisi incididunt.'
								section='Campaigns'
							/>
							<Activity
								time='17:25:15 17:12:2018'
								details='LorEu Lorem esse dolore in sint adipisicing id.Sunt in id veniam ea quis dolore nisi incididunt.'
								section='Campaigns'
							/>
							<Activity
								time='17:25:15 17:12:2018'
								details='LorEu Lorem esse dolore in sint adipisicing id.Sunt in id veniam ea quis dolore nisi incididunt.'
								section='Campaigns'
							/>
							
						</div><div className={styles.gredient}></div>
					
        </div>
)};
  
export default Properties;