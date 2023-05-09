const cpf = '111.111.111-11'
const limpaCpf = cpf.replace(/\D+/g,'')//aqui vamos tirar tudo que não é number


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
        console.log(`Seu cpf é valido `)
    }else console.log(`Teu cpf não é valido`)


}
validaNum1Cpf(limpaCpf)
