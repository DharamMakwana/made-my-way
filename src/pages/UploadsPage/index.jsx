import { Tabs } from '@mantine/core';

import { MyUploadsTab } from './components/MyUploadsTab';
import { MyBookmarksTab } from './components/MyBookmarksTab';

const UploadsPage = () => {
  
  return(
    <Tabs 
    style={{marginTop:'1rem'}}
    grow
    
    >
      <Tabs.Tab 
      label="My Uploads"
      >
      <MyUploadsTab />
      </Tabs.Tab>
      
      <Tabs.Tab 
      label="Bookmarks"
      >
      <MyBookmarksTab />
      </Tabs.Tab>
      
    </Tabs>
    )
}

export default UploadsPage