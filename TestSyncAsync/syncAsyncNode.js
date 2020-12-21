let users= ['1111', '2222', '3333'];

const doSomethingAsync = (ele) => {
    return new Promise(resolve => {
            setTimeout(() => resolve(ele       
            ), 4000)

    })
  }
  
  const doSomething = async () => {
    console.log(await doSomethingAsync())
  }

  async function loginWithUsers(arr) {
    for(const ele of arr) {
        await doSomethingAsync(ele);
        await searchForUser(ele);
        console.log('Element===' +ele);
    }

  }
  
  console.log('Before')
  //doSomething()
  loginWithUsers(users)
  console.log('After')


  // read the array with 5000 ms delay
  // do a login(arr[ele])
  // search for arr[ele]
  // repeat for another arr[ele]

  async function searchForUser(userName) {
    console.log('Enetered user information == ' +userName);

  }

  