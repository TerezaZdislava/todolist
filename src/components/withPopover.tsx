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
    padding: '20px 8px 5px 8px',
    border: '1px solid #DFE1E6',
    borderRadius: '8px',
  };

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton variant="ghost" ml="2" aria-label="Search database" icon={props.icon} />
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
