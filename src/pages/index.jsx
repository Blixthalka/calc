import * as React from "react"


const Input = ({id, name, value, setValue}) => {


  return (
      <div>
        <label for="id" className="block">{name}</label>
        <input
          type="number"
          id={id}
          className='px-2 border w-full rounded'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
  )
}


const IndexPage = () => {
  const [currentAccountbalance, setCurrentAccountBalance] = React.useState(0)
  const [billsLinda, setLindaBills] = React.useState(1133)
  const [billsEmil, setEmilBills] = React.useState(0)
  const [target, setTarget] = React.useState(10000)


  const diff = (billsLinda - billsEmil) / 2;
  const half = (target - currentAccountbalance) / 2;
  const emil =  Math.ceil(half + diff);
  const linda = Math.ceil(half - diff);


  return (
    <div className="max-w-sm mx-auto grid gap-5 mt-20 border p-5 rounded">
      <Input id="currentAccountbalance" name="Konto nu" value={currentAccountbalance} setValue={setCurrentAccountBalance} />
      <Input id="bills-e" name="Räkningar Emil" value={billsEmil} setValue={setEmilBills} />
      <Input id="bills-l" name="Räkningar Linda" value={billsLinda} setValue={setLindaBills } />
      <Input id="target" name="Värde efter överföring" value={target} setValue={setTarget} />

      <div className="grid font-bold text-2xl font-mono">
        <p className="bg-blue-300 rounded-t px-5 py-2">{emil} kr - Emil</p>
        <p className="bg-yellow-300 rounded-b px-5 my- py-2">{linda} kr - Linda</p>
      </div>
    </div>
  )
}

export default IndexPage