const masckCPF = function(){
    const input = document.querySelector('.input'); 

    input.addEventListener('keypress', () => { 
        let inputLength = input.value.length

        if( inputLength === 3){
        input.value += '.'
        }                         //Aqui são os códigos pra máscara de cpf
        if( inputLength === 7){
        input.value += '.'
        }
        if( inputLength === 11){
        input.value += '-'
        }
    
    })

}
const checkLength = num =>{
    if(num.length < 14){
        result.innerHTML = 'Digite um CPF válido'
        result.style.color = 'black'
        result.style.background = 'red'
    }
}



//Agora vamos pegar os enventos lá do html
const result = document.querySelector('.result')
const form = document.querySelector('#form')
form.addEventListener('submit', event =>{
        event.preventDefault();

        const input = event.target.querySelector('.input')
        checkLength(input.value)
        const realInput = input.value.replace(/\D+/g,'')
       
        result.innerHTML = ''
        console.log(input.value)
        console.log(realInput)
        validaNum1Cpf(realInput)
        
        
        input.value = ''
        
        
    })





const cpf = '166.366.817-56'
const limpaCpf = cpf.replace(/\D+/g,'')

const validaNum1Cpf = cpf => {
   
    

    const n1 =cpf[0]*10//10
    const n2 =cpf[1]*9 //54
    const n3 =cpf[2]*8 //48
    const n4 =cpf[3]*7//21
    const n5 =cpf[4]*6//36
    const n6 =cpf[5]*5//30
    const n7 =cpf[6]*4//32
    const n8 =cpf[7]*3//3
    const n9 =cpf[8]*2//14
    const allInAll1 = (n1+n2+n3+n4+n5+n6+n7+n8+n9)
    const finalDigit1 =  11 - (allInAll1 % 11)>9 ? 0: 11 - (allInAll1 % 11)

    
    const num1 = cpf[0]*11
    const num2 = cpf[1]*10
    const num3 = cpf[2]*9
    const num4 = cpf[3]*8
    const num5 = cpf[4]*7
    const num6 = cpf[5]*6
    const num7 = cpf[6]*5
    const num8 = cpf[7]*4
    const num9 = cpf[8]*3
    const num10 = finalDigit1 *2
    const allInAll2 = num1+num2+num3+num4+num5+num6+num7+num8+num9+num10
    const finalDigit2 =  11 - (allInAll2 % 11)>9 ? 0: 11 - (allInAll2 % 11)
    
    
    let testCpf = [...cpf]

    
    testCpf[9] =  finalDigit1.toString()
    testCpf[10] = finalDigit2.toString()
    testCpf = testCpf.join()
    testCpf = testCpf.replace(/\D+/g,'')

    console.log(testCpf)
    console.log(cpf)
 
   
    if(testCpf === cpf){
        result.innerHTML = 'Seu CPF é Válido'
        result.style.color = 'black'
        result.style.background = 'green'
    }else{
         result.innerHTML = 'Seu CPF é invalido'
         result.style.color = 'black'
         result.style.background = 'red'
        }


}
masckCPF()
