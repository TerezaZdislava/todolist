import {
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  PopoverBody,
  IconButton,
} from '@chakra-ui/react';

const withPopover = (Component: React.FunctionComponent) => (props: any) => {
  const itemStyle = {
    padding: '15px 8px 0px 8px',
    border: '1px solid #DFE1E6',
    borderRadius: '8px',
  };

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton ml="2" aria-label="Search database" icon={props.icon} variant="primary" />
      </PopoverTrigger>
      <PopoverContent style={itemStyle}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Component {...props} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default withPopover;
