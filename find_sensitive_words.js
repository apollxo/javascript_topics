//This script find sensitive words in context

const context = ['hey you wanna buy ViAgRa', 'Your looking for xxxxx', 'yo bItcH', 'Im innocent']

const terms = ['bitch', 'viagra','xxxxx' ]

context.forEach((item, index)=>{

	for(let i = 0; i< terms.length;i++){
		if(item.toLowerCase().indexOf(terms[i]) >= 0){
			console.log('we found at ' + index)
		}
	}	
})


