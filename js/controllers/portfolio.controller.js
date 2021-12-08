'use strict'

$(init);

function init() {
    renderProjects();
    renderSocialBtns();
}


function renderProjects() {
    const projs = getProjs();
    var strHtmls = projs.map((proj) => {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
                     <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${proj.id}')">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                         </div>
                         <img class="img-fluid" src=${proj.imgUrl} alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${proj.name}</h4>
                        <p class="text-muted">${proj.title}</p>
                    </div>
                </div>`
    });
    $('#portfolio .container .row:nth-child(2)').html(strHtmls);
}

function renderSocialBtns() {
    var strHtmls =
        `<li class="list-inline-item">
             <a href="https://twitter.com/@ItamarAvady" target="_blank">
                 <i class="fa fa-twitter"></i>
             </a>
         </li>
         <li class="list-inline-item">
             <a href="https://www.facebook.com/profile.php?id=100007727557646" target="_blank">
                 <i class="fa fa-facebook"></i>
             </a>
         </li>
        <li class="list-inline-item">
             <a href="https://www.linkedin.com/in/itamar-avady" target="_blank">
                  <i class="fa fa-linkedin"></i>
              </a>
         </li>`;
    $('ul.social-buttons').html(strHtmls);
}

function renderModal(projId) {
    const proj = getProjByIdx(projId);
    const elModal = $('.modal-body');

    elModal.children('h2:first-child').text(proj.name);
    elModal.children('.item-intro').text(proj.title);
    elModal.children('.img-fluid').attr('src', proj.imgUrl);
    elModal.children('p.modal-desc').text(proj.desc);
    elModal.children('.btn-proj-url').attr('href', proj.url);
    const timestamp = new Date(proj.publishedAt)
    const month = timestamp.toLocaleString('default', { month: 'short' });
    const year = timestamp.getFullYear();
    const date = `${month} ${year}`;
    elModal.children('ul').children('li.modal-date').text(`Date: ${date} `);
}

function submitContact() {
    const email = $('#emailInput').val();
    const subject = $('#subjectInput').val();
    const body = `${$('#bodyInput').val()}. message from ${email}`;


    const strHref = `https://mail.google.com/mail/?view=cm&fs=1&to=itamaravady@gmail.com&su=${subject}&body=${body}`;
    $('#emailInput').val('');
    $('#subjectInput').val('');
    $('#bodyInput').val('');
    window.open(strHref);
}