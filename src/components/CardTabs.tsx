import {Tabs, Tab, TabIndicator, TabList} from '@chakra-ui/react';

interface TabProps {
  onClick: any;
}

function CardTabs(props: TabProps) {
  return (
    <Tabs position="relative" variant="unstyled">
      <TabList>
        <Tab
          _selected={{color: 'blue.500'}}
          style={{fontWeight: '600'}}
          onClick={() => props.onClick('all')}
        >
          All
        </Tab>
        <Tab
          _selected={{color: 'blue.500'}}
          style={{fontWeight: '600'}}
          onClick={() => props.onClick('active')}
        >
          Active
        </Tab>
        <Tab
          _selected={{color: 'blue.500'}}
          style={{fontWeight: '600'}}
          onClick={() => props.onClick('completed')}
        >
          Done
        </Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
    </Tabs>
  );
}

export default CardTabs;
