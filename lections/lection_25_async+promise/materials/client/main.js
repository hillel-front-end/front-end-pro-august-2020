/*
    1)Async,
    2)Promise (catch) (callback hell)
    3)PromiseAll
    4)Practice
*/

// ------------------- async -------------------

// console.log('start');

// setTimeout(() => {
//    console.log('setTimeout');
// }, 0);

// let a = 0;

// for(let i = 0; i < 10000; i++) {
//   a++;
// }

// console.log("finish");

let a = 0;

// function ajax() {
//    console.log('start');

//    setTimeout(() => {
//       console.log('finish in setTimeout');
//    }, 0);

//    console.log('finish');
// }

document.querySelector('#send').onclick = function() {
   ajax();
};

document.querySelector('#show').onclick = function() {
   console.log(' ...  click ... ');
   foo();
};

function foo() {
   for(let i = 0; i < 1e3; i++) {
      a++; // sync
   };
}

// console.log(1);

// setTimeout(() => {
//    console.log('finish in setTimeout 5000');
// }, 5000);

// setTimeout(() => {
//    console.log('finish in setTimeout 3000');
// }, 3000);

// setTimeout(() => {
//    console.log('finish in setTimeout 1000');
// }, 1000);

// console.log(2);



// -------------- callback hell -----------------
let id = '';

// ajax({
//    url: 'http://localhost:3005/auth',
//    method: 'get',
//    data:{},
//    success(resp) {
//       id = resp.id;

//       ajax({
//          url: `localhost/getUserInfo?id=${id}`,
//          method: 'get',
//          data:{},
//          success(users) {

//             users.forEach(user => {
//                ajax({
//                   url: `localhost/getUsersAvatar${user.userAvatarId}`,
//                   method: 'get',
//                   data:{},
//                   success(id) {

//                      ajax({
//                         url: `localhost/getUsersAvatar${user.userAvatarId}`,
//                         method: 'get',
//                         data:{},
//                         success(id) {
                     
//                         }
//                      });

//                   }
//                });
//             });
//          }
//       });

//    }
// })


// setTimeout(() => { // very very bad
//    console.log(id, 'id');

//    ajax({
//       url: `localhost/getUserInfo?id=${id}`,
//       method: 'get',
//       data:{},
//       success(id) {
   
//       }
//    })

// }, 3000);

// if (id) { // bad
   // ajax({
   //    url: `localhost/getUserInfo?id=${id}`,
   //    method: 'get',
   //    data:{},
   //    success(id) {
   
   //    }
   // })
   
// }


 // ------------------- PROMISE -------------------

console.log(1);

//  const promise = new Promise((resolve, reject) => {
//    console.log(3, 'in promise sync');
         console.log(0);
//       setTimeout(() => {
//          console.log(4, 'in timeout async');
//          const response = [{}];
//          const id = '213123123';

//          if (id) {
//             resolve({data: 'ok', status: 200, id: id});
//          } else {
//             reject({data: 'connection refused', status: 404});
//          }

//       }, 1000)

//  });

//  promise
//    .then((response) => {
//          console.log('resolved', response.id);
//          // if (response.status == 200) {
//          //    return response;
//          // }
//          // return Promise.reject();
//          //return sendAjax(response.id)
//       },
//       (response) => {
//          sendToFacebook()
//          console.log('rejected', response);

//          return Promise.reject();
//       }
//    )

//    .then(() => {
//          // processData();
//          console.log('then 2 -- resolve')
//       },
//       () => {
//          console.log('then 2 -- reject')
//       }
//    );

   // throw Error(), new Promise((res, rej) => rej()), Promise.reject()



// function processData() {
//    console.log('processing data');
// }

// function sendToFacebook(){
//    console.log('send to facebook');
// }


// ajax({ 
//    url: 'http://localhost:3005/auth',
//    method: 'get',
//    data:{}
// })

// .then((resp) => {
//    console.log('ok', resp);

//    if (resp.id) {
//       return getUserID(resp);
//    }
// },
// () => {
//    console.log('error')
// })

// .then((id) => {
//    console.log(id, 'id then 2, resolved');

// //   return ajax({ 
// //       url: 'http://localhost:3005/getUserInfoById',
// //       method: 'get',
// //       data:{}
// //    })
// })

// .then((response) => {
//    console.log(response, 'response then # 3 resolve');
// },
// () => {

// });

// function getUserID(user) {
//    return user.id;
// }


function getData() {
   new Promise((res, rej) => {
      res('Erorr');
   })
   .then((resp) => {
      console.log('ok', resp);
   
      if (false) {
         return getUserID(resp);
      } else {
         throw Error('Exeption lololo');
      }
   })
   .catch((error) => {
      console.error('error', error);
      return '123123';
   })
   .finally((data) => {
      if (true) {
         // getData();
      }
      console.log('work', data);
   })
}

// getData();


// Promise.all([
//    new Promise(res => {
//       res(1);
//    }),
//    new Promise(res => {
//       res(2);
//    }),
//    new Promise(res => {
//       res(3);
//    })
// ])


// Promise.all([
//    ajax({ 
//       url: 'http://localhost:3005/getUserInfoById1',
//       method: 'get',
//       data:{}
//    }),
//    ajax({ 
//       url: 'http://localhost:3005/getUserInfoById2',
//       method: 'get',
//       data:{}
//    }),
//    ajax({ 
//       url: 'http://localhost:3005/getUserInfoById4',
//       method: 'get',
//       data:{}
//    })
// ])
// .then((data) => {
//    console.log(data, 'Promise.all');

// }, (data) => {
//    console.log(data, 'data');
// })


// ----------- fetch / axios -------------


// fetch('http://localhost:3005/getUserInfoById1')

// .then((response) => {
//    return response.json()
// }, (error) => {
//    console.log(error, 'reject')
// })
// .then((data) => {
//    console.log(data, 'data');
// })

// -------- async await -----------


// async function foo() {
//    try {
//       const response =  await fetch('http://localhost:3005/getUserInfoById1');


//       console.log(response, 'response');
   
//       const data =  await response.json();
   
//       console.log(data, 'data');
   
   
//       const data2 =  await (await fetch('http://localhost:3005/getUserInfoById1')).json()
   
//       console.log(data2, 'data2');
   
//       return 'Hello world';
//    } catch(error) {
//       console.log(error, 'error');
//    }
// }

// console.log(foo(), 'foo');

// const z = async () => console.log(await foo());
// foo()
//    .then((resp) => console.log(resp, 'resp'));

  
// z()

  


// console.log('After fooo');