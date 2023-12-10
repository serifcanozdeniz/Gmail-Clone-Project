// //* sabit verileri bu dosyada tutacağız

// // 1) ekrana basılacak maillerin verisi
// export const mailData = [
//     {
//         id: 1,
//         sender: 'Apple',
//         receiver: 'Okan',
//         title: 'Apple siparişiniz hakkında',
//         message: 'Sparişiniz gün içinde teslim edilmek üzere dağıtıma çıkmıştır',
//         date: '29 Kasım',
//     },
//     {
//         id: 2,
//         sender: 'Samsung',
//         receiver: 'Okan',
//         title: 'Samsung kampanya bildirimi',
//         message: 'Yeni kampanyamız hakkında bilgi almak için mağazalarımıza bekleriz.',
//         date: '1 Aralık',
//     },
//     {
//         id: 3,
//         sender: 'Microsoft',
//         receiver: 'Okan',
//         title: 'Microsoft Office güncelleme',
//         message: 'Yeni güncelleme yayınlandı, lütfen yazılımınızı güncelleyin.',
//         date: '5 Aralık',
//     },
//     {
//         id: 4,
//         sender: 'Amazon',
//         receiver: 'Okan',
//         title: 'Amazon Prime üyelik teklifi',
//         message: 'Prime üyeliğinizi yenilemek için son gününüz yaklaşıyor, avantajları kaçırmayın!',
//         date: '10 Aralık',
//     },
//     {
//         id: 5,
//         sender: 'Netflix',
//         receiver: 'Okan',
//         title: 'Yeni dizi önerisi',
//         message: 'Bu haftanın önerisi: En yeni dizi sizi bekliyor! İyi seyirler.',
//         date: '15 Aralık',
//     },
//     {
//         id: 6,
//         sender: 'Sony',
//         receiver: 'Okan',
//         title: 'PlayStation Plus indirimleri',
//         message: 'Bu ayki PlayStation Plus indirimlerini kaçırmayın, oyun keyfinizi artırın!',
//         date: '18 Aralık',
//     },
//     {
//         id: 7,
//         sender: 'Tesla',
//         receiver: 'Okan',
//         title: 'Yeni model tanıtımı',
//         message: '2024 model aracımızın tanıtımı için özel etkinliğimize davetlisiniz.',
//         date: '22 Aralık',
//     },
//     {
//         id: 8,
//         sender: 'Adobe',
//         receiver: 'Okan',
//         title: 'Adobe Creative Cloud güncelleme',
//         message: 'Yeni özelliklerle dolu bir güncelleme yayınlandı, deneyimlemek için güncelleyin.',
//         date: '25 Aralık',
//     },
//     {
//         id: 9,
//         sender: 'Twitter',
//         receiver: 'Okan',
//         title: 'Twitter bildirim',
//         message: 'Takip ettiğiniz kişilerden yeni tweetler var, göz atmayı unutmayın!',
//         date: '28 Aralık',
//     },
//     {
//         id: 10,
//         sender: 'LinkedIn',
//         receiver: 'Okan',
//         title: 'LinkedIn bağlantı teklifi',
//         message: 'İş ağınızı genişletmek için yeni bir bağlantı teklifi aldınız.',
//         date: '30 Aralık',
//     },
//     {
//         id: 11,
//         sender: 'Uber',
//         receiver: 'Okan',
//         title: 'Uber promosyon kodu',
//         message: 'Sonraki yolculuğunuzda %20 indirim kazanmak için kodu kullanmayı unutmayın!',
//         date: '2 Ocak',
//     },
//     {
//         id: 12,
//         sender: 'Airbnb',
//         receiver: 'Okan',
//         title: 'Yeni konaklama fırsatları',
//         message: 'Gelecek seyahatiniz için harika konaklama fırsatları bulduk. İncelemeyi unutmayın.',
//         date: '5 Ocak',
//     },
//     {
//         id: 13,
//         sender: 'Spotify',
//         receiver: 'Okan',
//         title: 'Yılbaşı çalma listesi',
//         message: 'Yeni yıla girmek için harika şarkılar içeren özel bir çalma listesi sizi bekliyor!',
//         date: '8 Ocak',
//     },
//     {
//         id: 14,
//         sender: 'Etsy',
//         receiver: 'Okan',
//         title: 'El yapımı ürün önerisi',
//         message: 'Etsy de ki el yapımı ürünler arasından size özel bir öneri!',
//         date: '12 Ocak',
//     },
//     {
//         id: 15,
//         sender: 'Fitbit',
//         receiver: 'Okan',
//         title: 'Günlük aktivite hatırlatma',
//         message: 'Bu hafta hedeflerinize ulaşmak için biraz daha hareket edebilirsiniz!',
//         date: '15 Ocak',
//     },
//     {
//         id: 16,
//         sender: 'Zoom',
//         receiver: 'Okan',
//         title: 'Zoom toplantı daveti',
//         message: 'Yarınki toplantımıza katılmak için bağlantıyı saklayın. Görüşmek üzere!',
//         date: '18 Ocak',
//     },
//     {
//         id: 17,
//         sender: 'DHL',
//         receiver: 'Okan',
//         title: 'Kargo takip bilgisi',
//         message: 'Siparişiniz yola çıktı, kargonuzun durumunu takip etmek için bilgiler burada.',
//         date: '22 Ocak',
//     },
//     {
//         id: 18,
//         sender: 'WhatsApp',
//         receiver: 'Okan',
//         title: 'Yeni mesaj bildirimi',
//         message: 'Bir arkadaşınız size yeni bir mesaj gönderdi, hemen cevap verin!',
//         date: '25 Ocak',
//     },
//     {
//         id: 19,
//         sender: 'Fitbit',
//         receiver: 'Okan',
//         title: 'Haftalık aktivite raporu',
//         message: 'Bu haftaki aktivite performansınızı incelemek için raporumuzu gönderiyoruz.',
//         date: '28 Ocak',
//     },
//     {
//         id: 20,
//         sender: 'Google',
//         receiver: 'Okan',
//         title: 'Google Drive paylaşım daveti',
//         message: 'Size bir dosya paylaşıldı, hemen inceleyebilirsiniz. Teşekkür ederiz!',
//         date: '31 Ocak',
//     },
// ]

export const month_tr = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
];