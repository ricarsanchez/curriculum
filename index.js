const showFunction = (id) => {
	const element = document.getElementById(id)
	const button = document.getElementById(`${id}-btn`)
	if(element.className === "hidden")
		{
			element.className = "show";
			button.innerText = "Ver menos...";
		}
	else
		{
			element.className = "hidden";
			button.innerText = "Ver mas...";
		}
}