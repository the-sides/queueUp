let response = await fetch('http://www.queueUp.tech/join', {
    method: 'POST',
    body: 'asdf'
  });
  const result = await response.json();
  console.log('Success:', JSON.stringify(result));