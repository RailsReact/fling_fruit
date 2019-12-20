const AllFruits = (props) =>  { 

  const fruits = props.fruits.map((fruit)=>{
    return(
      <div key={fruit.id}>
        <Fruit 
          fruit={fruit} 
          handlerDelete={props.handlerDelete}
        />
      </div>
    )
  })

  return(
    <div>
      {fruits}
    </div>
  )
  
}