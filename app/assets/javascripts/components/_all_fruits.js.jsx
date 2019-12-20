const AllFruits = (props) =>  { 

  const fruits = props.fruits.map((fruit)=>{
    return(
      <div key={fruit.id}>
        <Fruit 
          fruit={fruit} 
          handlerDelete={props.handlerDelete}
          handlerUpdate={props.handlerUpdate}
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