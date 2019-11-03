const response = await fetch('http://queueUp.tech/join', {
    method: 'POST',
    body: {'foo':'bar'}
  });
  const result = await response.json();
  console.log('Success:', JSON.stringify(result));