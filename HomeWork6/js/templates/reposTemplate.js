export const reposTemplate = (repos) => {
  return repos.map((rep, index) =>
    `<div data-rep-name="${rep.name}" class="rep">
        <h4 class="h4">
           ${index + 1}. ${rep.name}
        </h4>
        
        <div class="rep__last-commit">
            
        </div>
     </div>`
  ).join('');
}