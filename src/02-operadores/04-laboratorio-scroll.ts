import { fromEvent, map, tap } from 'rxjs';

const text = document.createElement('div');
text.innerHTML= `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis augue a est lobortis, quis congue quam pharetra. Donec nec blandit lacus, at pulvinar leo. Mauris sed diam in risus fringilla consequat vitae vitae odio. Sed in enim in turpis dictum accumsan ut luctus risus. In at lorem erat. Duis condimentum nisl ac scelerisque vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla viverra tempor mollis. Sed ut justo orci. Suspendisse pretium, quam ut hendrerit pharetra, libero urna pellentesque ante, in venenatis justo sem nec ante. Fusce id felis lectus. Proin at euismod urna.
<br>
Donec lacinia laoreet felis, scelerisque faucibus massa laoreet eu. Etiam cursus volutpat urna, et molestie dolor laoreet eget. Nulla commodo viverra mauris nec lobortis. Etiam nec magna at dolor vulputate tempus eget a sem. Sed vitae consequat eros, at ullamcorper eros. In quis nibh sed erat viverra pretium. Vivamus a sagittis ante.
<br>
Aenean convallis ultricies augue, id pretium tellus laoreet eget. Phasellus convallis est eget ex bibendum iaculis. Vestibulum eu tellus odio. Ut at lobortis erat. Vestibulum dictum, ligula eu hendrerit pretium, nunc metus mattis magna, molestie vulputate ipsum sapien a arcu. Morbi pellentesque pretium dui non tristique. Vestibulum malesuada nibh ipsum, fermentum semper massa pellentesque id. Vestibulum turpis nulla, ullamcorper sit amet aliquet eget, volutpat ac tellus. Fusce erat nisl, tempus eu pellentesque congue, auctor ut nunc. Quisque sed pretium ex, ac vestibulum libero. Aenean mattis luctus libero, in vehicula elit lacinia id. In eget laoreet leo, ut semper tortor. Donec convallis mollis nibh, id efficitur velit gravida in. Suspendisse imperdiet maximus pharetra. Suspendisse blandit eget lorem a varius. Donec interdum purus vitae leo iaculis, ut congue eros ultrices.
<br>
Nam pellentesque consequat metus. Nulla nec arcu urna. Nulla laoreet ligula ligula, ut aliquam enim euismod sit amet. Morbi cursus enim non mattis dapibus. In finibus rhoncus elit, ut mollis orci porta in. Cras finibus sem velit. Fusce bibendum sem mauris, consequat dignissim enim volutpat ut. Mauris non lacus ut tortor tincidunt sagittis. Vestibulum pretium lectus sit amet libero bibendum, condimentum blandit felis elementum. Ut pharetra lacus sed sapien feugiat, id tempor quam tempor. Nam porta erat vel venenatis pharetra. Nulla imperdiet cursus libero eget mollis. Duis egestas magna vitae tortor fringilla, lacinia porta libero venenatis.
<br>
Duis sollicitudin, massa quis blandit volutpat, magna lectus suscipit leo, efficitur aliquam lectus quam vel magna. Praesent vitae vulputate velit. Vivamus vitae tellus arcu. Ut ultricies facilisis malesuada. Ut vitae sagittis magna. Nullam id fermentum ante. Cras a semper sapien, quis volutpat neque. Nulla ac odio elit. Aenean finibus risus sed pretium ornare. Cras vehicula mollis quam, et vestibulum ipsum eleifend id. Proin ac blandit dui. Vestibulum pretium pharetra ante hendrerit dapibus. Aliquam sollicitudin sed augue a fermentum. Vestibulum convallis eleifend sapien id lobortis.
<br>
Etiam ac ante nec dui pretium fringilla. Vivamus a convallis sapien, vitae ultricies ante. Donec ac felis tincidunt, facilisis augue at, faucibus mi. Ut varius ligula id dolor sodales mattis. Sed a tincidunt dui. Nullam ut ipsum eget nulla vehicula suscipit. Aliquam nulla dolor, aliquet vitae consequat in, rhoncus malesuada sem. Nunc ut leo at purus iaculis ullamcorper a sed turpis. Nam et lorem pellentesque, faucibus libero et, venenatis libero. Vestibulum erat quam, lobortis consectetur odio in, euismod iaculis leo. Suspendisse a porttitor leo. Aenean enim lectus, blandit a ante in, ultrices commodo est.
<br>
Integer imperdiet dui erat, interdum fermentum ante tempus id. Sed non fringilla nibh, et pharetra eros. Nulla auctor fermentum tellus vitae laoreet. Proin scelerisque nisi egestas, sagittis tortor sit amet, elementum purus. Morbi et erat nibh. Praesent sagittis nunc sit amet sapien suscipit auctor. Donec dui odio, sollicitudin eget felis et, tincidunt tincidunt risus.
<br>
Suspendisse eget porttitor dui, sit amet laoreet dui. Quisque non bibendum dui. Nunc tempus, sapien at tristique iaculis, quam diam bibendum lorem, eu blandit justo ligula ut lorem. Aenean enim dolor, lacinia imperdiet risus suscipit, volutpat scelerisque lacus. Nulla eget tortor vitae ante varius finibus. Nunc libero nulla, luctus non lorem id, venenatis iaculis ante. Nullam rutrum in arcu ac suscipit. Mauris a velit vel purus tincidunt sollicitudin. Nullam eu ligula felis. Curabitur tellus tellus, venenatis vitae quam a, suscipit congue massa. Ut quis lorem ac elit tempor maximus. In tincidunt magna ac consectetur dignissim. Nulla quis magna at mauris tristique finibus quis vel eros. Cras in eleifend nibh. Aliquam imperdiet arcu nec faucibus laoreet.
<br>
Morbi sit amet mattis tellus, sit amet vestibulum massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sit amet lorem ut turpis lobortis dignissim non at quam. Mauris maximus purus eget felis ullamcorper hendrerit. Vestibulum malesuada id mi a congue. Curabitur finibus odio ex, ac varius eros facilisis eget. Integer tellus lorem, dapibus eu consectetur vel, fringilla et mi. Fusce sodales risus eget blandit imperdiet.
<br>
Aliquam neque urna, consequat tincidunt elit lobortis, elementum venenatis ex. Nam id accumsan dolor. Donec dignissim congue pulvinar. Praesent non viverra tortor, ultrices faucibus leo. Sed vehicula leo ac quam pellentesque volutpat. Fusce odio ipsum, sodales ac vulputate nec, dictum a nunc. Ut efficitur feugiat efficitur.
`
const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.classList.add('progress-bar');
body.append(progressBar);


const scroll$ = fromEvent<Event>(document, 'scroll');

const progress$ = scroll$.pipe(
    map((event) => calculateScrollPercentage(event)),
    tap((value) => console.log(value))
);

progress$.subscribe((percentage) => {
    progressBar.style.width = `${percentage}%`;
});

//scroll$.subscribe(console.log);


function calculateScrollPercentage(event: Event) {
    const { scrollTop, scrollHeight, clientHeight } = event.target['documentElement'];

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}