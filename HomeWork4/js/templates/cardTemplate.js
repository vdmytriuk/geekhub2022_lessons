export const cardTemplate =
    ({
         id,
         position,
         title,
         description,
         humanDate,
         completed
    }) => {

    return `<div 
                data-id="${id}" 
                data-title="${title}" 
                data-position="${position}"
                class="card ${completed ? 'card_completed' : ''}"
                draggable="true"
             >
                <div class="card__tools">
                    <label class="card__checkbox">
                        <span>Completed</span>
    
                        <input 
                            type="checkbox" 
                            name="completed" 
                            ${completed ? 'checked' : ''}
                        >
                    </label>
    
                    <div class="card__controls">
                        <button data-type="edit" class="card__button">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.875 10.7813V13.125H4.21875L11.1312 6.2125L8.7875 3.86875L1.875 10.7813ZM12.9437 4.4C13.1875 4.15625 13.1875 3.7625 12.9437 3.51875L11.4812 2.05625C11.2375 1.8125 10.8437 1.8125 10.6 2.05625L9.45625 3.2L11.8 5.54375L12.9437 4.4Z" fill="var(--main-color)"></path></svg>
                        </button>
    
                        <button data-type="delete" class="card__button">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 10.2929C-0.097631 10.6834 -0.097631 11.3166 0.292893 11.7071C0.683417 12.0976 1.31658 12.0976 1.70711 11.7071L0.292893 10.2929ZM11.7071 1.70711C12.0976 1.31658 12.0976 0.683419 11.7071 0.292894C11.3166 -0.0976301 10.6834 -0.0976302 10.2929 0.292894L11.7071 1.70711ZM1.70711 0.292893C1.31658 -0.097631 0.683418 -0.097631 0.292893 0.292893C-0.097631 0.683417 -0.097631 1.31658 0.292893 1.70711L1.70711 0.292893ZM10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L10.2929 11.7071ZM1.70711 11.7071L11.7071 1.70711L10.2929 0.292894L0.292893 10.2929L1.70711 11.7071ZM0.292893 1.70711L10.2929 11.7071L11.7071 10.2929L1.70711 0.292893L0.292893 1.70711Z" fill="var(--main-color)"></path></svg>
                        </button>
                    </div>
                </div>
    
                <div class="card__inner">
                    <h3 class="card__title h3">
                        ${title}
                    </h3>
    
                    <p class="card__desc">
                        ${description}
                    </p>
                </div>
    
                <div class="card__date">
                    <span>
                        ${humanDate}
                    </span>
                </div>
            </div>`
}