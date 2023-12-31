const Header = ({name}) => {
    return(
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
  
  const Part = ({name, exercises}) => {
    return(
      <div>
        <p>{name} {exercises}</p>
      </div>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map((part, i) => <Part key={i} name={part.name} exercises={part.exercises} />)}
      </div>
    )
  }
  
  const Total = ({parts}) => {
    const sum = parts.map(part => part.exercises)
    .reduce((part1, part2) => part1 + part2)
    return(
      <div>
        <p>Total of {sum} exercises</p>
      </div>
    )
  }
  
  const Course = ({course}) => {
    return(
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

  export default Course