console.log("async and fetch")

// Asynchrony

function iAmSynchronous(){
  for (let i = 0; i < 50000000; i++) {
    let d = new Date()
  }

  console.log('outside of the loop')
}


function iAmAsynchronous(){
  setTimeout(function(){
    console.log('inside the timeout')
  }, 7000)

  console.log('outside the timeout')
}

// Fetch


