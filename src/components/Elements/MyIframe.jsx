import React from 'react';

function MyIframe() {
  const iframeStyle = {
    width: '100%',
    height: '1050px',
    border: 'none',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    zIndex: '999999',
  };

  return (
    <iframe
      src="https://tradehq.com.au/monumentalbuildinggroup/enquire"
      style={iframeStyle}
      title="Monumental Building Group Enquire"
    ></iframe>
  );
}

export default MyIframe;