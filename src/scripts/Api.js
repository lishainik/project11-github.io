class Api {
        constructor(option) {
            this.option = option;
            this.url = option.baseUrl;
            this.key = option.headers.authorization;
           
        }   

        submitProfileInfo (name, link) {
           return fetch(`${this.url}/users/me` , {
                method: 'PATCH',
                headers: {
                  authorization: `${this.key}`,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                   
                  name: name,
                  about: link
                })
                
                })
                .then(res => {
                    if (res.ok)
                    {return res.json()}
                    return Promise.reject(`Ошибка: ${res.status}`);
                })
                .then ((result) => {
                    /* !! Надо исправить: Для реализации вы создавали в прошлом спринте отдельные классы и методы.   
                    *  Не переносите и не дублируйте реализацию в  класс Api. С класса можно только возвращать данные  
                    *  которые получены от сервера. Реализацию необходимо удалить, а этот метод вызывать из других классов(методов)  
                    */  
                    return result
                    })
                    .catch((err) => {
                      console.log(err); 
              });
        }
        

        getProfileInfo () {
            
           return fetch (`${this.url}/users/me` , {
        headers: {
      
         authorization: `${this.key}`
     }
        })
        .then(res => {
            if (res.ok) {return res.json()}
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((result) => {
          /* !! Надо исправить: Для реализации вы создавали в прошлом спринте отдельные классы и методы.   
          *  Не переносите и не дублируйте реализацию в  класс Api. С класса можно только возвращать данные  
          *  которые получены от сервера. Реализацию необходимо удалить, а этот метод вызывать из других классов(методов)  
          */  
          return result
        })
        .catch((err) => {
          console.log(err); 
        });
        
        }

        getCards() {
            return fetch (`${this.url}/cards` , {
              headers: {
            
               authorization: `${this.key}`
           }
              })
              .then(res => {
                  if(res.ok) {return res.json()}

                  return Promise.reject(`Ошибка: ${res.status}`);
                })
              .then((result) => {
                /*  !!Надо исправить: Для реализации вы создавали в прошлом спринте отдельные классы и методы.   
                *  Не переносите и не дублируйте реализацию в  класс Api. С класса можно только возвращать данные  
                *  которые получены от сервера. Реализацию необходимо удалить, а этот метод вызывать из других классов(методов)  
                */  
                 return result
                })
                .catch((err) => {
                  console.log(err); 
              });
              
              }
        }
