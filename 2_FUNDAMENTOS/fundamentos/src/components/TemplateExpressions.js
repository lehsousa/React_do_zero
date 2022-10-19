const TemplateExpressions = () => {
	const name = 'Leandro'
	const data = {
		age: 39,
		job: 'Programmer'
	}

	return (
		<div>
			<h1>Olá {name}, tudo bem?</h1>
			<p>minha idade é {data.age}</p>
			<p>E eu sou {data.job}!</p>
		</div>
	)
}

export default TemplateExpressions
