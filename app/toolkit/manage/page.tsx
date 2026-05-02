"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  
  interface Contact {
    id: number;
    name: string;
    phone: string;
    avatar: string;
  }

  const [contacts, setContacts] = React.useState<Contact[]>([
    { id: 1, name: 'Robert Doe', phone: '+1 (555) 123-4567', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4HBGcMtwVOv3pibgT4Sy5PBrk_-pF34zKSiO45vBH7Jw5f4K5OD8_ygRJH4JHo2zNsQ946U6Srjf5tTvDRH7LUEK1g5HRxWqcR96LRDUBL7mZCwDOU8zHP7wswTynB_fZDIqBGMJJIvCGzMRjsun7Sulyafm4CkwfApOSjx-HZPeflGDjY50zVb-yLvZ9JXD4DxM55vP5BbTEEQnkeSB3eyexmXqwTilCMWzLq3AyecfXPmWDZt20emeAmykqinAhOgIVMky5BOM' },
    { id: 2, name: 'Sarah Smith', phone: '+1 (555) 987-6543', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGf2oKrPDWMCxfXAbmr8oC9acK-pENckuaVLqGZ-K4D5D8pIdOz00IsUWAsb3_hbbBNanV30PjhOmEuHVIEBb9-uipHblZxCZYKjRVPIBoQORLHs9glfVm-BFF1ymPIgvwG-OSsMw2tYppW_PZqmgjqQvCwzEmIeU0vD0Y_c3MU6v41JYoFwP6IRPrkVn9r1U-joW84dI8Vcszo0hwfBDY0x4jwBmbQUMFzjKMkHuIP1fPs4K9cPVzmWrZZ5KqJpYz1T505SYeodI' }
  ]);
  
  const [newName, setNewName] = React.useState('');
  const [newPhone, setNewPhone] = React.useState('');
  const [editingId, setEditingId] = React.useState<number | null>(null);

  const handleDelete = (id: number) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const handleEdit = (contact: Contact) => {
    setEditingId(contact.id);
    setNewName(contact.name);
    setNewPhone(contact.phone);
    document.getElementById('add-contact-form')?.classList.remove('hidden');
  };

  const handleSaveContact = () => {
    if (newName && newPhone) {
      if (editingId !== null) {
        setContacts(contacts.map(c => c.id === editingId ? { ...c, name: newName, phone: newPhone } : c));
      } else {
        const nextId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
        setContacts([...contacts, { 
          id: nextId, 
          name: newName, 
          phone: newPhone, 
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
        }]);
      }
      resetForm();
    }
  };

  const resetForm = () => {
    setNewName('');
    setNewPhone('');
    setEditingId(null);
    document.getElementById('add-contact-form')?.classList.add('hidden');
  };

  const showToastAndNavigate = () => {
      const toast = document.getElementById('success-toast');
      if(toast) {
          toast.classList.remove('-translate-y-12', 'opacity-0');
          toast.classList.add('translate-y-0', 'opacity-100');
          setTimeout(() => {
              router.push('/toolkit');
          }, 1500);
      } else {
        router.push('/toolkit');
      }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-lg md:max-w-4xl relative flex flex-col min-h-screen shadow-2xl bg-surface overflow-hidden">

{/*  Toast Notification  */}
<div className="fixed top-20 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-6 py-3 rounded-full shadow-[0_8px_24px_rgba(26,26,24,0.12)] transform -translate-y-12 opacity-0 pointer-events-none transition-all duration-300 z-50 flex items-center gap-2" id="success-toast">
<span className="material-symbols-outlined text-[20px]" data-icon="check_circle">check_circle</span>
<span className="font-medium text-[1rem]">Changes saved successfully</span>
</div>
{/*  TopAppBar  */}
<header className="sticky top-0 z-40 w-full bg-[#FCF9F5]/80 backdrop-blur-xl shadow-[0_8px_24px_rgba(26,26,24,0.04)]">
  <div className="flex items-center justify-between px-6 h-16 w-full max-w-lg md:max-w-4xl mx-auto">
    <div className="w-10 flex items-center">
      <button className="text-[#1A1A18]/60 hover:opacity-80 transition-opacity active:scale-95 duration-200 flex items-center" onClick={() => { router.push('/toolkit') }}>
        <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
      </button>
    </div>
    <h1 className="text-center flex-1 font-semibold text-xl text-[#1D9E75] font-['Inter'] tracking-tight">SOS Details</h1>
    <div className="w-10 flex items-center justify-end">
      <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high border-outline-variant/15 border flex items-center justify-center">
        <img alt="User profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAt3qCVOe87Tbu0MWNdNgAH25J6lV_4Qh2_xRZ7hFQInM-hD9z6EcXik8hXDCntS0JPN3j7NH438oMhipwFUsgK3EqAEE94f61Fmac_hYXQsF4HIRVCTwfpMALEIJ_YvH6-mOVGBytkqpnfdB-GXUsBk63COLvblYYCq0y_sZr5JB2StD-234lRvqw0odU9tdJRfxXfLfW_Jb1B6MjFpYgk3e4j_txmezI0LTK1iQs3w1lMSCSo4OoZ2WDdapbifqu1tNfl0pT6DU"/>
      </div>
    </div>
  </div>
</header>
{/*  Main Content Canvas  */}
<main className="px-6 pt-6 pb-48 max-w-md mx-auto flex-1 overflow-y-auto flex flex-col gap-8">
<p className="text-[1rem] font-regular text-on-surface-variant -mt-4">Manage your emergency profile.</p>
{/*  Personal Info Card  */}
<section className="bg-surface-container-lowest rounded-DEFAULT p-6 shadow-[0_4px_16px_rgba(26,26,24,0.02)]">
<h3 className="text-[1.125rem] font-semibold text-on-background mb-6">Personal Information</h3>
<div className="flex flex-col gap-5">
{/*  Input Group  */}
<div className="flex flex-col gap-1.5">
<label className="text-[0.75rem] font-medium tracking-[0.02em] text-on-surface-variant ml-1">Full Name</label>
<input className="w-full bg-surface-container text-on-background rounded-sm px-4 py-3 border-none focus:ring-0 focus:bg-surface-container-lowest focus:outline focus:outline-1 focus:outline-primary/20 transition-colors text-[1rem]" type="text" defaultValue="Jane Doe"/>
</div>
{/*  Input Group  */}
<div className="flex flex-col gap-1.5">
<label className="text-[0.75rem] font-medium tracking-[0.02em] text-on-surface-variant ml-1">Blood Group</label>
<input className="w-full bg-surface-container text-on-background rounded-sm px-4 py-3 border-none focus:ring-0 focus:bg-surface-container-lowest focus:outline focus:outline-1 focus:outline-primary/20 transition-colors text-[1rem]" type="text" defaultValue="O Positive (O+)"/>
</div>
{/*  Input Group  */}
<div className="flex flex-col gap-1.5">
<label className="text-[0.75rem] font-medium tracking-[0.02em] text-on-surface-variant ml-1">Medical Notes</label>
<textarea className="w-full bg-surface-container text-on-background rounded-sm px-4 py-3 border-none focus:ring-0 focus:bg-surface-container-lowest focus:outline focus:outline-1 focus:outline-primary/20 transition-colors text-[1rem] resize-none" rows={3} defaultValue="Allergic to Penicillin. Mild asthma."></textarea>
</div>
</div>
</section>
{/*  Emergency Contacts Section  */}
<section className="bg-surface-container-lowest rounded-DEFAULT p-6 shadow-[0_4px_16px_rgba(26,26,24,0.02)]">
<h3 className="text-[1.125rem] font-semibold text-on-background mb-6">Emergency Contacts</h3>
<div className="flex flex-col gap-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high border-outline-variant/15 border shrink-0">
                <img alt="Contact avatar" className="w-full h-full object-cover" src={contact.avatar}/>
              </div>
              <div>
                <p className="text-[1rem] font-medium text-on-background leading-tight">{contact.name}</p>
                <p className="text-[0.75rem] text-on-surface-variant mt-0.5">{contact.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button 
                className="p-2 text-on-surface-variant hover:text-primary transition-colors"
                onClick={() => handleEdit(contact)}
              >
                <span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span>
              </button>
              <button 
                className="p-2 text-on-surface-variant hover:text-error transition-colors"
                onClick={() => handleDelete(contact.id)}
              >
                <span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
              </button>
            </div>
          </div>
        ))}
{/*  Add Contact Button  */}
<button className="mt-2 w-full py-3 rounded-full border border-outline-variant/20 text-on-surface-variant font-medium text-[1rem] flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors" onClick={() => { resetForm(); document.getElementById('add-contact-form')?.classList.remove('hidden') }}>
<span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                    Add Contact
                </button>
{/*  Inline Add Contact Form  */}
<div className="hidden mt-2 p-4 bg-surface-container-low rounded-xl border border-outline-variant/20 transition-all" id="add-contact-form">
<div className="flex flex-col gap-3">
<input 
  className="w-full bg-surface-container text-on-background rounded-sm px-4 py-3 border-none focus:ring-0 focus:bg-surface-container-lowest focus:outline focus:outline-1 focus:outline-primary/20 transition-colors text-[1rem]" 
  placeholder="Contact Name" 
  type="text"
  value={newName}
  onChange={(e) => setNewName(e.target.value)}
/>
<input 
  className="w-full bg-surface-container text-on-background rounded-sm px-4 py-3 border-none focus:ring-0 focus:bg-surface-container-lowest focus:outline focus:outline-1 focus:outline-primary/20 transition-colors text-[1rem]" 
  placeholder="Phone Number" 
  type="tel"
  value={newPhone}
  onChange={(e) => setNewPhone(e.target.value)}
/>
<div className="flex items-center justify-end gap-2 mt-1">
<button className="px-4 py-2 rounded-full text-on-surface-variant font-medium hover:bg-surface-container transition-colors" onClick={resetForm}>Cancel</button>
<button className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-colors" onClick={handleSaveContact}>Save</button>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  Pinned Save Action  */}
<div className="fixed bottom-[104px] left-0 right-0 px-6 max-w-md mx-auto z-30 pointer-events-none">
<button className="pointer-events-auto w-full rounded-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold text-[1rem] shadow-[0_8px_24px_rgba(26,26,24,0.12)] hover:opacity-90 active:scale-95 transition-all" onClick={() => { showToastAndNavigate() }}>
            Save Changes
        </button>
</div>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 right-0 h-[72px] z-50 rounded-t-3xl bg-[#FCF9F5]/85  backdrop-blur-md shadow-[0_-8px_24px_rgba(26,26,24,0.08)] flex justify-around items-center px-4 pb-safe  md:sticky md:bottom-6 md:left-auto md:w-full md:mx-auto md:rounded-full w-full max-w-lg md:max-w-4xl">
<Link className="flex flex-col items-center justify-center text-slate-400  hover:bg-slate-100 :bg-slate-800 transition-colors active:scale-90 duration-200 p-2 rounded-lg" href="/">
<span className="material-symbols-outlined mb-1">home</span>
<span className="font-inter text-[10px] font-medium tracking-wide">Home</span>
</Link>
<Link className="flex flex-col items-center justify-center text-slate-400  hover:bg-slate-100 :bg-slate-800 transition-colors active:scale-90 duration-200 p-2 rounded-lg" href="/travel">
<span className="material-symbols-outlined mb-1">explore</span>
<span className="font-inter text-[10px] font-medium tracking-wide">Travel</span>
</Link>
<Link className="flex flex-col items-center justify-center text-slate-400  hover:bg-slate-100 :bg-slate-800 transition-colors active:scale-90 duration-200 p-2 rounded-lg" href="#">
<span className="material-symbols-outlined mb-1">bed</span>
<span className="font-inter text-[10px] font-medium tracking-wide">Stay</span>
</Link>
<Link className="flex flex-col items-center justify-center text-slate-400  hover:bg-slate-100 :bg-slate-800 transition-colors active:scale-90 duration-200 p-2 rounded-lg" href="/navigate">
<span className="material-symbols-outlined mb-1">near_me</span>
<span className="font-inter text-[10px] font-medium tracking-wide">Navigate</span>
</Link>
<Link className="flex flex-col items-center justify-center bg-[#1D9E75]/10  text-[#1D9E75]  rounded-full px-4 py-1 active:scale-90 transition-all duration-200" href="/toolkit">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>handyman</span>
<span className="font-inter text-[10px] font-medium tracking-wide">Toolkit</span>
</Link>
</nav>


      </div>
    </div>
  );
}
