export default function ShowcaseImage({image_url}) {
    return <section style={{backgroundImage: `url(${image_url})`}} className={`section showcase-image min-h-[420px] bg-center bg-cover bg-no-repeat`}>
    </section>
}